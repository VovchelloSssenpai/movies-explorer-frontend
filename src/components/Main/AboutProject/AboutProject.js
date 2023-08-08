function AboutProject() {
    return (
      <section className="aboutProject" id="aboutProject">
        <h2 className="sectionHeader">О проекте</h2>
        <div className="aboutProject__content">
            <div className="aboutProject__wrapper">
                <h3 className="aboutProject__title ">Дипломный проект включал 5 этапов</h3>
                <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="aboutProject__wrapper">
                <h3 className="aboutProject__title">На выполнение диплома ушло 5 недель</h3>
                <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="table__header table__header-small">1 неделя</th>
              <th className="table__header">4 недели</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table__text table__text-small">Back-end</td>
              <td className="table__text">Front-end</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
  
  export default AboutProject;