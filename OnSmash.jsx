function Button({ onSmash, children }) {
    return (
      <button onClick={onSmash}>
        {children}
      </button>
    );
  }
  
  export default function OnSmash() {
    return (
      <div>
        <h1>ON SMASH EXAMPLE</h1>
        <Button onSmash={() => alert('Playing!')}>
          Play Movie
        </Button>
        <Button onSmash={() => alert('Uploading!')}>
          Upload Image
        </Button>
      </div>
    );
  }