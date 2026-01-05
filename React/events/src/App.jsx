export default function App() {

  function abc() {
    console.log("Hello");
  }

  return <div>
    {/* Event Calling its Function */}
    {/* <button onClick={abc}>btn</button> */}

    {/* Event Written inside another Event */}
    {/* <input type="text" onInput={() => { console.log(`Hi`); }} /> */}

    <form action="login" onSubmit={(e) => {
      e.preventDefault();

    }}>
      <label htmlFor="un">Username: </label>
      <input type="text" placeholder="Username" onInput={(e) => {

        console.log(e.target.value);

      }} />
      <br />
      <label htmlFor="passs">Password: </label>
      <input type="text" placeholder="Password" onInput={(e) => {

        console.log(e.target.value);

      }} />
      <br />
      <button onClick={() => {
        console.log("Form Submitted");
      }}>Submit</button>
    </form>


    {/* OnClickCapture is Capturing the Function when the Click event happens */}
    <section onClickCapture={() => {
      console.log(`Hii`);

    }}>
      <button onClick={() => {
        console.log(`Helloo`);

      }}>bTn</button>

    </section>
  </div>


}