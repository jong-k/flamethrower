import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { type PhotoType } from "../../components/PhotoList";

// fetching 의도적으로 늦추는 함수 -> test용
const pause = async (duration: number) => {
  return await new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
    fetchFn: async (...args) => {
      await pause(1000);
      return await fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo: PhotoType) => {
            return { type: "Photo", id: photo.id };
          });
          tags.push({ type: "PhotoAlbum", id: album.id });
          return tags;
        },
        query: (album) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "PhotoAlbum", id: album.id }];
        },
        query: (album) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "Photo", id: photo.id }];
        },
        query: (photo: PhotoType) => {
          return {
            method: "DELETE",
            url: `/photos/${photo.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
