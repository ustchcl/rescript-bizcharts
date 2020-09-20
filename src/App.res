@react.component()
let make = () => {
  let style = ReactDOM.Style.make(
    ~display="flex",
    ~flexDirection="column",
    ()
  );

  <div style>
    <Example1/>
  </div>
}
