import React from "react";
import { StyleSheet, Text } from "react-native";
import { List } from "react-native-paper";
import { mainColor } from "../components/Constants";
const Accordion = ({ item }) => {  
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const list = [
    {
      title: "Product Description",
      content: item.description,
    },
    {
      title: "Nuteritional Information",
      content: item.nutritionalInformation,
    },
    {
      title: "Product Type",
      content: item.productType,
    },
    {
      title: "Dietary Need",
      content: item.dietNeeds,
    },
    {
      title: "Speciality",
      content: item.specialty,
    },
    {
      title: "Pack Dimentions",
      content: item.packageDimensions,
    },
    {
      title: "Pack Weight",
      content: item.packageWeight,
    },
    {
      title: "Storage Requirements",
      content: item.storageRequirements,
    },
    {
        title: "Country Of Origin",
        content: item.originCountry,
      },
  ];

  return (
    <List.Section>
      {list.map((a) => {
        return (
          <List.Accordion
            title={a.title}
            style={{ backgroundColor: "white" }}
            theme={{ colors: { primary: mainColor } }}
            key={a.title}
          >
            <Text style={{ margin: 20 }}>{a.content}</Text>
          </List.Accordion>
        );
      })}
    </List.Section>
  );
};

export default Accordion;

const styles = StyleSheet.create({});
