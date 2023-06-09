import { useContext } from "react"
import { GlobalContext } from "../../context"

export function LoadingCardDescription() {
    const {i18n} = useContext(GlobalContext);
    return (
        <>
            <h4 className="text-2xl font-bold mb-2 text-gray-800">{i18n.constant.loading}</h4>
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </>
    )
}