import Documentation from '../pages/Documentation'

export default () => (
    <div>
      <Layout />
      <div className="container__wrap">
        <Route path="/documentation" component={Documentation} />
      </div>
    </div>
  );
  