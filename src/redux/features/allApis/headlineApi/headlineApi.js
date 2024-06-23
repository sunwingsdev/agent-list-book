import baseApi from "../../baseApi";

const headlineApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add headline
    addHeadline: builder.mutation({
      query: (data) => ({
        url: "/headline",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["headline"],
    }),

    // get headlines
    getHeadline: builder.query({
      query: () => "/headline",
      providesTags: ["headline"],
    }),
  }),
});

export const { useAddHeadlineMutation,useGetHeadlineQuery } = headlineApi;
