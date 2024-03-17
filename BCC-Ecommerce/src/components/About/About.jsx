import "bootstrap/dist/css/bootstrap.min.css"
import "./About.css";
import AngeluImg from '@/images/angelu.jpg';

export default function About(){
    return (
        <>
       

        <div className="container-fluid text-center mb-5">
            <span className="text">MOCK UP ECOMMERCE</span>
            <img class="img"></img>
        </div>

        <div className="container-fluid text-center d-flex justify-content-center flex-column align-items-center aboutText">
            <span>( About )</span>
            <span class="about-text">Lorem ipsum dolor sit amet consectetur. In maecenas vulputate velit tellus. Quisque scelerisque netus metus accumsan bibendum.</span>
        </div>

        <div className="container-fluid d-flex justify-content-center gap-3">
            <img src="" className="img2" id="img-down" />
            <img src="" className="img2"  id="img-up"/>
        </div>

        <div className="text-wrap span2">
            Lorem ipsum dolor sit amet consectetur. Sem nibh ridiculus consequat gravida at cras eleifend.
        </div>
    

        {/* Team Section */}
        <div className="container-fluid" id="teamSection">
            <h1 id="teamtxt">Team</h1>
            <div className="row d-flex justify-content-evenly mb-5">
                <div className="col-auto">
                <div class="card" id="cardTeam">
                    <img src="..." class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Cole Uyan</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-auto">
                <div class="card" id="cardTeam">
                    <img src={AngeluImg} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Angelu Banogbanog</h5>
                        <p class="card-text">I am gay</p>
                        <a href="#" class="btn btn-primary">Call me? :*</a>
                    </div>
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                <div class="card" id="cardTeam">
                    <img src="..." class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Herjhun Gerundio</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center ">
            <div className="bullets">bullets</div>
            <div className="bullets">bullets</div>
            <div className="arrows">arrows</div>
            <div className="arrows">arrows</div>
            </div>
            
        </div>
        {/* END OF TEAM CARD */}


        <div className="goalsText text-wrap">
            Lorem ipsum dolor sit amet consectetur.  Vitae elementum malesuada montes ultrices sagittis venenatis.
        </div>

        <div className="container-fluid text-center mb-5">
            <span id="spanGoal">GOALS FOR THE BUSINESS/TEAM/OR UNSA???</span>
        </div>

        <div className="container" id="goalContainer">
            <div className="row d-flex justify-content-center mb-5">
                <div className="col-auto">
                <div class="card" id="cardGoal">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>

                <div className="col-auto">
                <div class="card" id="cardGoal">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-evenly">
            <div className="col-auto">
                <div class="card" id="cardGoal">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                <div class="card" id="cardGoal">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                <div class="card" id="cardGoal">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border border-secondary border-2 opacity-100"/>
        <footer>
            <div className="container-fluid mb-5">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-auto d-flex flex-column">
                        <span class="mb-5 mt-4"> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</span>
                        <span> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</span>
                    </div>

                    <div className="col-auto mt-3">
                        <div className="details mb-2">
                            <label htmlFor="">Email: </label>
                            <a href="#"> BCC1@gmail.com</a>
                        </div>

                        <div className="details mb-2">
                            <label htmlFor="">Instagram: </label>
                            <span> Lorem ipsum dolor sit amet consectetur.</span>
                        </div>

                        <div className="details mb-2">
                            <label htmlFor="">Facebook: </label>
                            <span> Lorem ipsum dolor sit amet consectetur.</span>
                        </div>

                        <div className="details mb-2">
                            <label htmlFor="">WhatsApp: </label>
                            <span> Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                    </div>

                    <div className="col-auto d-flex  flex-column justify-content-center align-items-center">
                            <h1>Business Name</h1>
                            <button class="btn btn-primary">contact us</button>
                    </div>
                </div>
               
            </div>
        </footer>
     </>
        
    );
}