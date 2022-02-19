type Props = {
  loading: boolean;
};

const Loading = ({ loading }: Props): JSX.Element => (
  <div className={loading ? 'loading' : 'hide'}>

  </div >
)

export default Loading;