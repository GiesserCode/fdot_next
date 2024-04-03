import {getUserData, getWordsetbyId, getWordsetsData} from "@/app/actions";
import WriteInput from "@/app/components/learn/WriteInput";
import Link from "next/link";
import {BackSVG} from "@/app/ui/SVG";

const Learnlearn = async ({searchParams,}: { searchParams?: { query?: string; }; }) => {
    const accounts = await getUserData()
    const wordsets_user = await getWordsetsData(accounts)
    const query = searchParams?.query?.length === 36 ? searchParams.query : false;
    const wordsetData = query ? await getWordsetbyId(query) : wordsets_user[0]
    const userWordset = accounts![0].wordsets_user.find((item: any) => item.id === wordsetData[0].id);

    return <section className={"w-full h-screen grid place-items-center relative"}>
        <Link href={`/learn?query=${query}`} className={"focus:outline-none focus:bg-gblue absolute z-30 left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"}>
            <BackSVG />
            Back
        </Link>
        <WriteInput userWordset={userWordset.words} officialWordset={wordsetData[0].words} id={query} />
    </section>
}

export default Learnlearn