import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import StyleGuide  from "./StyleGuide";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  mainTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  radio: {
    borderWidth: 4,
    borderColor: StyleGuide.palette.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  projectTitle: {
    ...StyleGuide.typography.title1,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 8,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#e6e5ea",
    paddingBottom: 8,
    borderBottomWidth: 1,
  },
  title: {
    ...StyleGuide.typography.title2,
    fontWeight: "bold",
    color: StyleGuide.palette.primary,
  },
  section: {
    marginTop: StyleGuide.spacing * 4,
    marginBottom: StyleGuide.spacing * 2,
  },
  todo: {
    flexDirection: "row",
    marginVertical: StyleGuide.spacing,
    alignItems: "center",
  },
  label: {
    ...StyleGuide.typography.body,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#e6e5ea",
    marginRight: 8,
  },
});

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <View style={styles.section}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Icon
        name="more-horizontal"
        color={StyleGuide.palette.primary}
        size={24}
      />
    </View>
    {children}
  </View>
);

interface TodoProps {
  label: string;
}

const Todo = ({ label }: TodoProps) => (
  <View style={styles.todo}>
    <View style={styles.checkbox} />
    <Text style={styles.label}>{label}</Text>
  </View>
);

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainTitle}>
        <View style={styles.radio} />
        <Text style={styles.projectTitle}>Pull To Search</Text>
      </View>
      <Text>
        By Pushpender Singh
      </Text>
      <Section title="List 1">
        <Todo label="Text 1" />
        <Todo label="Text 2" />
        <Todo label="Text 3" />
        <Todo label="Text 4" />
        <Todo label="Text 5" />
        <Todo label="Text 6" />
      </Section>
      <Section title="List 2">
        <Todo label="Text 7" />
        <Todo label="Text 8" />
        <Todo label="Text 9" />
        <Todo label="Text 10" />
        <Todo label="Text 11" />
      </Section>
      <Section title="List 3">
        <Todo label="Text 12" />
        <Todo label="Text 13" />
        <Todo label="Text 14" />
        <Todo label="Text 15" />
        <Todo label="Text 16" />
        <Todo label="Text 17" />
      </Section>
      <Section title="List 4">
        <Todo label="Text 18" />
        <Todo label="Text 19" />
        <Todo label="Text 20" />
        <Todo label="Text 21" />
        <Todo label="Text 22" />
      </Section>
    </View>
  );
};
