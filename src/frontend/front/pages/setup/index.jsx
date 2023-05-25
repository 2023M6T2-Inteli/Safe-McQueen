import Registration from "@/components/Registration";
import NewRoute from "@/components/NewRoute";
import Searchh from "@/components/Search";
import Header from "@/components/Header";

var route_id = [
    {
        id: "K2WW0PJN3",
    },
    {
        id: "1KA88J102G",
    },
    {
        id: "0M9KL2S15",
    },
    {
        id: "B6Z11L9M3",
    },
]

export default function Inspection(){
    return(
        <div className="bg">
            <div>
                <Header />
            </div>
            <div style={{display: 'flex', width: 'calc(100vw - 64px)', margin: '0 32px'}}>
                <div className="mt-16 pt-10 pl-10 pb-8 w-2/5 bg-azul rounded-lg">
                    <div className="font-inter text-white">
                        <p>Selecione o espaço confinado que deseja inspecionar.</p>
                    </div>
                    <div className="mt-4">
                        <Searchh />
                    </div>
                    <div className="mt-4">
                        <NewRoute />
                    </div>
                {route_id.map(json => {return <div className="mt-4"><Registration id = {json.id} /></div>})}
                </div>
                <div className="ml-16 mt-16 w-3/5 h-64 bg-azul rounded-lg">
                    <div className="font-inter text-white pt-10 pl-10">
                        <p>Selecione um espaço confinado para visualizar uma prévia de sua rota.</p>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}