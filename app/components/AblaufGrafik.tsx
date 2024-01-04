const weeks = Array.from({ length: 8 }, (_, index) => index + 1);

const AblaufGrafik = () => {
    return <section className={`w-full h-[600px]`}>
        <div className={`w-full h-full p-10`}>
            <div className="grid grid-cols-8 grid-rows-5 w-full h-full">

                {weeks.map((week) => (
                    <div key={week} className={`col-span-1 row-span-1 flex bg-red-600 border`}>
                        Week {week}
                    </div>
                ))}

                <div className="col-span-1 row-span-1 row-start-2 flex">
                    Week 1
                </div>

                <div className="col-span-2 row-span-1 row-start-3 col-start-2 flex">
                    Week 2-3
                </div>

                <div className="col-span-4 row-span-1 row-start-4 col-start-3 flex">
                    Week 3-6
                </div>

                <div className="col-span-1 row-span-1 row-start-5 col-start-7 flex">
                    Week 7-8
                </div>
            </div>

        </div>
    </section>
}

export default AblaufGrafik