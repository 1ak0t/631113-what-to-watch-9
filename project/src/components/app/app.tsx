import StartScreen from '../start-screen/start-screen';

type AppScreenProps = {
  filmsCount: number;
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

function App({filmsCount, promoFilmName, promoFilmGenre, promoFilmYear}: AppScreenProps): JSX.Element {
  return (
    <StartScreen
      filmsCount={filmsCount}
      promoFilmName={promoFilmName}
      promoFilmGenre={promoFilmGenre}
      promoFilmYear={promoFilmYear}
    />
  );
}

export default App;
