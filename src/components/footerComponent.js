import facebookIcon from '../assets/facebookIcon.svg';
import instagramIcon from '../assets/instagramIcon.svg';
import "../styles/backgroundgrid.css"
export function FooterComponent (){
    return (
        <div id="footer" className="relative bg-[#583671]">
            <div className="relative w-full flex flex-col-reverse md:flex-row pt-10">
                <div className="flex-1 pl-16">
                    <h1 className="text-left text-base font-normal text-white">Atrévete</h1>
                    <h1 className="text-left text-xl font-semibold text-[#ed184f]">Empieza el cambio hoy.</h1>
                    <div className="relative w-full flex pt-5 justify-start">
                        <a href="https://web.facebook.com/profile.php?id=100031324907198" className="pr-5"><img src={facebookIcon} alt="Logiciel Applab Facebook"/></a>
                        <a href="https://www.instagram.com/logicielapplab/ " className=""><img src={instagramIcon} alt="Logiciel Applab Instagram"/></a>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="w-full flex justify-center">
                        <img src="https://res.cloudinary.com/logicielapplab/image/upload/v1677460943/LogicielApplab/LOGO_NUEVO_LOGICIEL_125_efllcs.png" className="animate-bounce h-20 mr-3"
                             alt="Logiciel Applab Logo"/>
                    </div>
                    <h1 className="text-white text-center text-xl text-black">Logiciel Applab</h1>
                </div>
            </div>
            <div className="w-full mt-5 h-5" >
                <h6 className="text-white text-center py-2 text-xs">® Logicel Applab - Todos los derechos reservados.</h6>
            </div>
        </div>
    );
}