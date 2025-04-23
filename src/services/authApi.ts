/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RootState } from '../store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      },
    }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/register',
        method: 'POST',
        body: userInfo,
      }),
    }),
    getBoards: builder.query<any[], void>({
        query: () => '/boards/',
      }),
      getStandardsByBoard: builder.query<any[], string>({
        query: (boardId: string) => `/standards/${boardId}`,
      }),
      getSubjectsByStandard: builder.query<any[], string>({
        query: (standardId) => `/subjects/${standardId}`,
      }),
      getResourcesBySubject: builder.query<any[], string>({
        query: (subjectId) => `/resources/${subjectId}`,
      }),
   
      
  }),
});

export const { 
useLoginMutation, 
useSignupMutation,
useGetBoardsQuery,
useGetStandardsByBoardQuery,
useGetSubjectsByStandardQuery,
useGetResourcesBySubjectQuery,

} = authApi;
