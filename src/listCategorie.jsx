import React from "react";

const categories = [
  { id: 888746, name: "Les Voyageurs du Temps ", description: "Derniers modèles de smartphones équipés des meilleures technologies : processeurs puissants, caméras haute résolution, batteries longue durée et compatibilité 5G." },
  { id: 888746, name: "Les Ombres du Crépuscule", description: "PC portables et ordinateurs de bureau adaptés à tous les besoins : bureautique, gaming, graphisme ou développement, avec des performances optimisées et un design moderne." },
  { id: 888746, name: "Les Ombres du Crépuscule ", description: "Claviers, souris, écrans, supports et autres accessoires indispensables pour améliorer le confort et la productivité de votre espace de travail." },
  { id: 888746, name: "Les Héritiers de l Atlantide", description: "Derniers modèles de smartphones équipés des meilleures technologies : processeurs puissants, caméras haute résolution, batteries longue durée et compatibilité 5G." },
  { id: 888746, name: "Les Rebelles de l Aurore", description: "Consoles de jeux vidéo dernière génération, accessoires de gaming, manettes et casques dédiés pour une expérience fluide et immersive." },
  { id: 888746, name: "book6", description: "Derniers modèles de smartphones équipés des meilleures technologies : processeurs puissants, caméras haute résolution, batteries longue durée et compatibilité 5G." },
  { id: 888746, name: "book7", description: "Disques durs HDD et SSD, clés USB et cartes mémoire avec des capacités variées pour sauvegarder et sécuriser vos fichiers importants." },
];

const CategoryTable = () => {
  return (
    <div className="container">
      <button className="add-category">Ajouter une catégorie +</button>
      <table className="category-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom du catégorie</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <button className="edit">Modifier</button>
                <button className="delete">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
