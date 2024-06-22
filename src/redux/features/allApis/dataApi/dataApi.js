import baseApi from "../../baseApi";

const dataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add a data
    addData: builder.mutation({
      query: (data) => ({
        url: "/data",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),

    // get all data
    getAllData: builder.query({
      query: () => "/data",
      providesTags: ["data"],
    }),

    deleteSingleData: builder.mutation({
      query: (id) => ({
        url: `/data/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["data"],
    }),
  }),
});

export const {
  useAddDataMutation,
  useGetAllDataQuery,
  useDeleteSingleDataMutation,
} = dataApi;
