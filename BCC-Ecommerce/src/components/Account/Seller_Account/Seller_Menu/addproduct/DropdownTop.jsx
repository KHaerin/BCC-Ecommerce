export default function DropdownTop(){
    return(
        <>
        <div className="input-group mb-3">
               <select id="inputGroupSelect02" className="form-select" defaultValue="">
                   <option value="" disabled>Select a clothing category---</option>
                   <option value="1">Pants</option>
                   <option value="2">Chinos</option>
                   <option value="3">Denim</option>
                   <option value="4">Shorts</option>
                   <option value="5">Skirts</option>
           </select>
       </div>
        </>
    )
}