import baseApi from "../../baseApi";

const homeContentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // add  content
    addContent: builder.mutation({
      query: (data) => ({
        url: "/home-contents",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["home-contents"],
    }),

    // get all home contents
    getAllContents: builder.query({
      query: () => "/home-contents",
      providesTags: ["home-contents"],
    }),
    
  }),
});

export const { useAddContentMutation, useGetAllContentsQuery } =
  homeContentsApi;
