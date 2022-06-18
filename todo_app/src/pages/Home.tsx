import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import List from "../components/List/List";
import { Lists } from "../interfaces/list";
import "./Home.css";

const objData = [
  { name: "Estudiar React", status: false },
  { name: "Estudiar React 2", status: false },
  { name: "Estudiar React 3", status: false },
];
const Home: React.FC = () => {
  const [data, setData] = useState<Lists>();
  const [lista, setLista] = useState<Lists[]>(objData);
  const handleSubmitTodo = (e: any) => {
    if (data === undefined) {
      alert("fill can't be empty");
      return;
    }
    setLista([...lista, data as any]);
  };
  return (
    <IonPage>
      <IonHeader mode="md">
        <IonToolbar color="light">
          <IonTitle>Todo Application List 📚</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="medium">
        <div className="ion-padding">
          <IonRow>
            <IonCol size="12">
              <IonItem color="medium">
                <IonInput
                  id="name"
                  onIonChange={(e) =>
                    setData({
                      [e.target.id!]: e.detail.value,
                      status: false,
                    })
                  }
                ></IonInput>
                <IonButton onClick={handleSubmitTodo} className="todo__btn">
                  Send
                </IonButton>
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <h2 className="todo__title">Task list 📑 </h2>
            </IonCol>
            <IonCol size="12">
              {lista.map((res, index) => {
                return (
                  <List
                    id={index}
                    name={res?.name}
                    status={res?.status}
                    key={index}
                  />
                );
              })}
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
      <IonFooter mode="md">
        <IonToolbar color="light">
          <p className="todo__footer">
            Created by <b>Lirrumscode</b>
          </p>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
