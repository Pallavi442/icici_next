function InsuranceForm(){
    return(
    <div>
         <form className="flex gap-8 w-full flex-col border-[1px] border-[rgba(201,201,201,1)] rounded-lg p-4">
            <div>
                <input className="border-[1px] border-[rgba(201,201,201,1)] rounded-lg p-2 w-full" placeholder="Car registration no."/>
            </div>
            <div>
             <input className="border-[1px] border-[rgba(201,201,201,1)] rounded-lg p-2 w-full" placeholder="Mobile No."/>
            </div>
            <div>
             <input className="border-[1px] border-[rgba(201,201,201,1)] rounded-lg p-2 w-full" placeholder="Email"/>
            </div>
            
            <div className="w-full border-[1px] border-neutral-50 p-2 rounded-lg bg-[rgb(236_102_8/1)] text-center">
                <button className="text-white">
                Get quote
                </button>
            </div>
            <a href="" className="text-[rgb(236_102_8/1)] underline underline-offset-1">Retrieve quote</a>
            <div className="flex gap-1">
            <input
              type="checkbox"
            //   checked={true}
              className="accent-[rgb(236_102_8/1)]"
            />
            <label>I agree to the <a className="underline underline-offset-1">terms and conditions</a></label>
            </div>
         </form>
         <div className="text-center bg-[#FFF2EB] rounded-b-2xl mx-6 py-2">
         <span className="text-[rgb(236_102_8/1)] underline underline-offset-1">Renew your ICICI Lombard policy</span>
         </div>
        
    </div>
    )
}
export default InsuranceForm