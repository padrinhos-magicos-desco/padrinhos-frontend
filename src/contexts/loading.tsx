import { createContext, useReducer } from 'react';

type Action = { type: 'SET_LOADING_STATE' } | { type: 'REMOVE_LOADING_STATE' };

interface LoadingContextProvider {
  loading: boolean;
  dispatch: React.Dispatch<Action>;
}

interface LoadingStateData {
  loading: boolean;
}

type Props = {
  children: React.ReactNode;
};

const LoadingContext = createContext<LoadingContextProvider>(
  {} as LoadingContextProvider
);

export const LoadingProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    (_state: LoadingStateData, action: Action) => {
      switch (action.type) {
        case 'SET_LOADING_STATE':
          return { loading: true };
        case 'REMOVE_LOADING_STATE':
          return { loading: false };
        default:
          throw new Error();
      }
    },
    {} as LoadingStateData
  );

  return (
    <LoadingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
