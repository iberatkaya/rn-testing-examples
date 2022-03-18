import { User } from '../../modals/user';

// Define a type for the slice state
export interface HomeState {
  error?: string;
  user?: User;
  isFetching: boolean;
}
