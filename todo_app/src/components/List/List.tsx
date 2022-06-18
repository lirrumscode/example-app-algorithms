import { IonCol, IonItem, IonLabel, IonList, IonRow } from "@ionic/react";
import { useState } from "react";
import { Lists } from "../../interfaces/list";
import "../List/List.css";

const List: React.FC<Lists> = ({ id, name, status }) => {
  const [states, setStates] = useState<boolean>(false);
  const handleChangeState = () => {
    setStates((status) => !status);
  };
  return (
    <>
      <IonRow>
        <IonCol size="12">
          <IonList key={id}>
            <IonItem color="medium" lines="none">
              <IonLabel onClick={handleChangeState}>
                📘 {name} {!states ? "😊" : "😞"}
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCol>
      </IonRow>
    </>
  );
};

export default List;
