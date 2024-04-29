import { Button } from "@/components/Button";
import type { HairCutSpaceData } from "@/types/main.types";

export function HairCutSpace({ data }: { data: HairCutSpaceData }) {
    return (
        <div>
            <h1 className="test">{data.name}</h1>
            <Button rel="nofollow" type="primary" href="/prise-de-rdv?id=1">Prendre rendez-vous</Button>
        </div>
    );
}
