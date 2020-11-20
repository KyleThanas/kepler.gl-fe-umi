export interface Redis {
  host: string;
  port: number;
  password: string;
  db: number;
}

export interface ApolloContent {
  redis: Redis;
}
