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
  }),
});

export const { useAddDataMutation, useGetAllDataQuery } = dataApi;
