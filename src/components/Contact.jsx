import React from 'react'

const Contact = () => {
   return <div className="contact">
      <main>
         <h1>Contact Us</h1>
         <form>

            <div>
               <label>Name</label>
               <input type="text" required placeholder='Abc'></input>
            </div>

            <div>
               <label>Email</label>
               <input type="email" required placeholder='Abc@xyz.com'></input>
            </div>

            <div>
               <label>Service</label>

                  <select id="serv" required placeholder="Select your query...">
                     <option value="res">RESEIDENTIAL WASTE COLLECTION</option>
                      <option value="com">COMMERCIAL WASTE COLLECTION</option>
                      <option value="indust">INDUSTRIAL CLEANING SERVICES</option>
                      <option value="dumps">DUMPSTER RENTAL SERVICES</option>
                      <option value="liquid">LIQUID AND HAZARDOUS WASTE</option>
                       <option value="liquid">SOIL REMEDIATION SERVICES</option>
                  </select>
            </div>

            <div>
               <label>Contact No</label>
               <input type="number" required placeholder='+1234567891'></input>
            </div>

            <div>
               <label>Available Hours</label>
            
               <select id="serv" required placeholder="Select your query...">
                     <option value="morning">9am to 12pm</option>
                      <option value="AfterNoon">12pm to 6pm</option>
                      <option value="Evening">6pm to 10pm</option>
                      
                  </select>
            </div>

             <button type='submit'>Send</button>
         </form>
      </main>
   </div>
}

         export default Contact