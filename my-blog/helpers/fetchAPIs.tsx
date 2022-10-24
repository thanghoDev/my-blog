import React from 'react';

type fetchAPIsProps = {
  page: string;
  order: string;
  limit: string;
  sortBy: string;
  search?: string;
};

export async function fetchAPIs({
  page,
  limit,
  sortBy,
  order,
  search,
}: fetchAPIsProps) {
  if (search) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DEVELOPMENT}?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}&search=${search}`
    );
    return response.json();
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DEVELOPMENT}?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`
    );
    return response.json();
  }
}
