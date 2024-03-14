import {deleteTask, UpdateTask} from "@/app/actions";
import {TrashSVG} from "@/app/ui/SVG";

const EditTasks = ({item}: any) => {
    return item.tasks! === null || <>{item.tasks.map((thing: any, number: number) => (
        <form key={number} className={`bg-normalBG border border-lightBG p-2 rounded-xl mb-4`} action={(e) => UpdateTask(e, item.id, thing.id)}>
            <div className={`flex w-full justify-between`}>
                <div className={`flex items-center`}>
                    name:
                    <input type="text" autoComplete={"off"} className={`no-focus normal-input`} defaultValue={thing.name} name={"name"}/>
                </div>
                <button type={"button"} onClick={() => deleteTask(item.id, thing.id)}>
                    <TrashSVG/>
                </button>
            </div>
            <div className={`flex`}>type:
                <select className={`no-focus normal-input w-min`} defaultValue={thing.type} name={"type"}>
                    <option className={`bg-normalBG text-primary`} value={"Developement"}>Developement</option>
                    <option className={`bg-normalBG text-primary`} value={"Design"}>Design</option>
                </select>
            </div>
            <div className={`flex`}>notes:
                <input type="text" autoComplete={"off"} className={`no-focus normal-input`} defaultValue={thing.notes}
                       name={"notes"}/>
            </div>
            <div className={`flex`}>status:
                <select className={`no-focus normal-input w-min`} defaultValue={thing.status}
                        name={"status"}>
                    <option className={`bg-normalBG text-primary`} value={"nicht begonnen"}>nicht begonnen</option>
                    <option className={`bg-normalBG text-primary`} value={"begonnen"}>begonnen</option>
                    <option className={`bg-normalBG text-primary`} value={"fertig"}>fertig</option>
                </select>
            </div>
            <div className={`flex`}>enddate:
                <input type="date" className={`no-focus normal-input w-min`} defaultValue={thing.enddate}
                       name={"endDate"}/>
            </div>
            <div className={`flex`}>startDate:
                <input type="date" className={`no-focus normal-input w-min`} defaultValue={thing.startDate}
                       name={"startDate"}/>
            </div>
            <button type={"submit"} className={`p-2 bg-primary text-normalBG rounded-xl`}>Submit</button>
        </form>
    ))}
    </>
}

export default EditTasks