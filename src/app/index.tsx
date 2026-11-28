import { SpotCard } from "@/components/spot-card";
import { Category, SPOTS } from "@/data/spots";
import { ScrollView, StyleSheet, Text } from "react-native";

const counts = SPOTS.reduce<Partial<Record<Category, number>>>((acc, spot) => {
  acc[spot.category] = (acc[spot.category] ?? 0) + 1;
  return acc;
}, {});

const summary = Object.entries(counts)
  .map(([category, n]) => `${n} ${category}`)
  .join(" · ");

export default function Index() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>{SPOTS.length} places worth visiting</Text>
      <Text style={styles.summary}>{summary}</Text>
      {SPOTS.map((spot) => (
        <SpotCard key={spot.id} spot={spot} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f6f4",
  },
  content: {
    padding: 16,
  },
  subtitle: {
    marginBottom: 4,
    color: "#666",
  },
  summary: {
    marginBottom: 16,
    color: "#666",
    fontWeight: "600",
  },
});