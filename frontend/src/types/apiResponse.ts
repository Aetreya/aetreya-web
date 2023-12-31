export interface ApiResponse<T> {
  data: T | null;
  errors: string | null;
}
