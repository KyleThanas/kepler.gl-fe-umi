import { useBoolean } from 'ahooks';

// 兼容 @umijs/hooks
export default (value: boolean) => {
  const [state, actions] = useBoolean(value);
  return {
    state,
    ...actions,
  };
};
