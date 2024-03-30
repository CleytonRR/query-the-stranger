export interface Mapper<D, P> {
  toDomain: (arg: P) => D;
  toPersistence: (arg: D) => P;
}
