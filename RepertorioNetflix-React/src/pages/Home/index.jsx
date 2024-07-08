import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CarrosselFilmes from '../../components/CFilmes'
import CarrosselLivros from '../../components/CLivros'
import CarrosselMusicas from '../../components/CMusicas'
import Footer from '../../components/Footer'

function Home() {
    return (
       <>
            <Header/>
            <Banner/>
            <CarrosselFilmes/>
            <CarrosselLivros/>
            <CarrosselMusicas/>
            <Footer/>
            
        </> 
    )
}

export default Home
