

const Contect = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>

            <h1 className='py-4 text-4xl font-bold text-center text-black'>Contect Me</h1>
            <form action="https://getform.io/f/280ddb2a-45d2-48de-8619-9e9e1fa1b36a" method="POST" encType='multipart/form-data'>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="text-sm py-2" htmlFor="name" >Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-black/50" type="text" name="name" id="name" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="number" className="text-sm py-2">Number</label>
                        <input className="border-2 rounded-lg p-3 flex border-black/50" type="number" name="number" id="number" />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-sm py-2" htmlFor="">Mail id</label>
                    <input className="border-2 rounded-lg p-3 flex border-black/50" type="email" name="email" id="" required />
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-sm py-2" htmlFor="">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-black/50" type="text" name="subject" id="" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-sm py-2" htmlFor="">Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-black/50" name="textarea" id="" cols="" rows="10"></textarea>
                </div>
                <div className="flex justify-center">
                    <button className="bg-green/50 mt-4 p-4 rounded-lg bg-black/50 w-50% font-bold text-[20px]">Send Me</button>
                </div>
            </form>
        </div>
    )
}

export default Contect
