/**
 * PaginatedResult<TResult>
 */

export class PaginatedResult<TResult> {
    public entities: TResult[];
    public totalCount: number;
}
