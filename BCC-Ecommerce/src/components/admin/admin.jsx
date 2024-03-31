
export default function Admin() {


    const backBtn = () => {
        window.location.href="/"
    };

    return (
        <>  
            <button className="btn btn-dark" type="button" onClick={backBtn}>Go back</button>
            <h1>Admin Page</h1>
        </>
    );
}
