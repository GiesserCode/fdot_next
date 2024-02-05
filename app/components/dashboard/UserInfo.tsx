

const UserInfo = async ({users}: any) => {

    return <div className={`w-full grid place-items-center overflow-x-hidden`}>
        <div className={`w-full flex justify-evenly`}>
            <div className={`w-2/5 grid place-items-center bg-normalBG rounded-xl`}>
                <h2>
                    {users.hours}
                </h2>
                <p>Stunden</p>
            </div>
            <div className={`w-2/5`}>
                <div>
                    <h3>

                    </h3>
                    <p>

                    </p>
                </div>
                <div>
                    <h3>

                    </h3>
                    <p>

                    </p>
                </div>
            </div>
        </div>
        <div>
            <h2></h2>
        </div>
        <div>
            mapfunction
        </div>
    </div>
}

export default UserInfo