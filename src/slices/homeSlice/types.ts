import { User } from '../../models/user';

// Define a type for the slice state
export interface HomeState {
  error?: string;
  user?: User;
  isFetching: boolean;
}
