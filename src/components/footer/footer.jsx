import React from 'react';
import './footer.scss';

const Footer = () => {
  const footerLinks = [
    {
      name: "О нас",
      informations: [
        "Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.",
        "Все инструменты проверены, отстроены и доведены до идеала!" 
      ]
    },
    {
      name: "Каталог",
      links: [
        {
          name: "Акустические гитары",
          href: "#"
        },
        {
          name: "Классические гитары",
          href: "#"
        },
        {
          name: "Электрогитары",
          href: "#"
        },
        {
          name: "Бас-гитары",
          href: "#"
        },
        {
          name: "Укулеле",
          href: "#"
        },
      ]
    },
    {
      name: "Информация",
      links: [
        {
          name: "Где купить?",
          href: "#"
        },
        {
          name: "Блог",
          href: "#"
        },
        {
          name: "Вопрос - ответ",
          href: "#"
        },
        {
          name: "Возврат",
          href: "#"
        },
        {
          name: "Сервис-центры",
          href: "#"
        },
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="footer__background">
        <img src="../img/image_header.png" alt="Гитара" />
      </div>
      <div className="footer__filling">
        <div className="footer__container container">
          <div className="footer__left">
            <a href="/" className="footer__logo">
              <svg  width="67" height="70">
                <use xlinkHref="#logo" />
              </svg>
            </a>
            <div className="footer__column footer__column--social">
              <h2 className="visually-hidden">Мы в социальных сетях</h2>
              <ul className="footer__social-list">
                <li className="footer__social-item">
                  <a className="footer__social-link" href="/#">
                    <span className="visually-hidden">Мы в Facebook</span>
                    <svg width="24" height="24">
                      <use xlinkHref="#facebook" />
                    </svg>
                  </a>
                </li>
                <li className="footer__social-item">
                  <a className="footer__social-link" href="/#">
                    <span className="visually-hidden">Мы в Instagram</span>
                    <svg width="24" height="24">
                      <use xlinkHref="#instagram" />
                    </svg>
                  </a>
                </li>
                <li className="footer__social-item">
                  <a className="footer__social-link" href="/#">
                    <span className="visually-hidden">Мы в Twitter</span>
                    <svg width="24" height="24">
                      <use xlinkHref="#twitter" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="footer__right">
            {
              footerLinks.map((link, index) => (
                <li 
                  key={link.name + index}
                >
                  <h2 className="footer__title">{link.name}</h2>
                  {link.informations ? 
                    link.informations.map((info, index) => (
                      <p className="footer__info"
                        key={info + index}
                      >
                        {info}
                      </p>
                    ))
                    : <></>
                  }
                {link.links ? 
                  <ul className="footer__links">
                    {link.links.map((item, index) => (
                      <li
                        key={item.name + index}
                        className="footer__item"
                      >
                        <a href={item.href}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                  : <></>  
                }
                </li>
              ))
            }    
            <li>
              <h2 className="footer__title">Контакты</h2>
              <p className="footer__info"
              >
               <span>г. Санкт-Петербург,</span> 
               <span>м. Невский проспект,</span>  
               <span>ул. Казанская 6.</span>  
                
               <span><svg width="9" height="9">
                  <use xlinkHref="#phone" />
                </svg>
                8-812-500-50-50</span> 
              </p>           
              <p className="footer__info"
              >
               <span>Режим работы:</span> 
               <span><svg width="9" height="9">
                  <use xlinkHref="#clock" />
                </svg>с 11:00 до 20:00,</span>
                <span> без выходных.</span>
              </p>    
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;