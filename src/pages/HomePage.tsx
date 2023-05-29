import ListOffersComponent from "../components/ListOffers/ListOffers";
import SearchOffersComponent from "../components/SearchOffers/SearchOffers";

export function HomePage() {
    return (
        <>
            <div className="m-2">
              <h1 className="tracking-wide text-primary text-2xl font-semibold">TIPJOBS</h1>
              <h5 className="tracking-wide text-accent text-xl font-semibold">
                Consejos para tu nuevo puesto de trabajo
              </h5>
            </div>
          <header>
            <div className="bg-primary px-10 py-20 w-full h-auto">
              <SearchOffersComponent></SearchOffersComponent>
            </div>
          </header>
          <section>
            <div className="space-y-8 lg:divide-y lg:divide-gray-100">
              <ListOffersComponent></ListOffersComponent>
            </div>
          </section>
        </>
      )
}