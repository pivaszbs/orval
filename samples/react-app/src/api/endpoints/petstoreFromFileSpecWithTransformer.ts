/**
 * Generated by orval v6.8.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type { Pets, ListPetsParams, CreatePetsBody, Pet } from '../model';
import { customInstance } from '../mutator/custom-instance';

export type AwaitedInput<T> = PromiseLike<T> | T;

export type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const listPets = (
  params?: ListPetsParams,
  version = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pets>({
    url: `/v${version}/pets`,
    method: 'get',
    signal,
    params,
  });
};

/**
 * @summary Create a pet
 */
export const createPets = (createPetsBody: CreatePetsBody, version = 1) => {
  return customInstance<void>({
    url: `/v${version}/pets`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
  });
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = (
  petId: string,
  version = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pet>({
    url: `/v${version}/pets/${petId}`,
    method: 'get',
    signal,
  });
};

export type ListPetsResult = NonNullable<Awaited<ReturnType<typeof listPets>>>;
export type CreatePetsResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type ShowPetByIdResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
