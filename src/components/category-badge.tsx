import { Category } from "@/data/spots";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  category: Category;
}

const CATEGORY_COLOR: Record<Category, string> = {
  sight: "#f4d7a1",
  food: "#f7c6c0",
  park: "#c8e6c0",
  museum: "#cdd7f2",
  campus: "#e3cdf0",
  bar: "#f6e2a0",
  shop: "#bfe6e4",
};

export function CategoryBadge({ category }: Props) {
  return (
    <View style={[styles.badge, { backgroundColor: CATEGORY_COLOR[category] }]}>
      <Text style={styles.label}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
  },
});