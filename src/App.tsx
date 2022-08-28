import './styles/App.css';
import { dataArr } from './api/StudyJamData';
import  './styles/table.module.css'

function App() {

  const headerContent = ["index", "date", "chapter", "title", "guide", "note"]
  return (
    <div className="App">
      <header className="App-header">
        <table >
          <thead>
            <tr>

              {
                headerContent.map(content => (
                  <th>
                    {content}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              dataArr.map(({ date, chapter, title, guided, note, index }) => (
                <tr>
                  <td> {index}</td>
                  <td> {date}</td>
                  <td> {chapter}</td>
                  <td> {title}</td>
                  <td> {guided}</td>
                  <td> {note}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
