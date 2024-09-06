// Ce code TypeScript mériterait quelques modifications.
// Suivez les consignes en commentaire pour l'améliorer !
// Toutes demanderont d'utiliser des génériques, que ce soit
// les votres ou ceux proposés par TypeScript.
// N'oubliez pas de chercher dans la documentation : https://www.typescriptlang.org/docs/handbook/utility-types.html 
// ====================

type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
 };
 
 // Consigne n°1
 // Les propriétés de "Stats" ci-dessous sont
 // redondantes avec celles de "Character".
 // Chercher dans la documentation un générique qui nous permettrait d'éviter la répétition.
 type Stats = Omit<Character,'name'>;
 
 // Consigne n°2
 // De la même manière que pour "Stats", trouvez
 // par quel moyen on pourrait éviter la répétion de 
 // "attack" et "defense" dans ce type "Equipment".
 // Attention au caractère "requis" ou "optionnel" des propriétés !
 // "attack" et "defense" sont obligatoires dans "Stats"
 // mais optionnelles dans "Equipment" !
 type Equipment = Omit<Partial<Stats>, 'life'> & {
     price: number;
 };

 // Consigne n°3
 // Transformez ce type en générique.
 // Il est utilisé plus bas dans ce code.
 type WithMagic <itemType> = itemType & {
    magic: number;
 }
 
 // ====================
 // Ne touchez PAS aux lignes ci-dessous, ne modifiez que les
 // lignes ci-dessus, mais faites en sorte que TypeScript soit
 // content !
 
 type Pet = Character;
 type MagicalPet = WithMagic<Pet>;
 
 type Hero = Character & {
    pets?: Array<Pet>;
    equipments?: Array<Equipment>;
 };
 
 type Magician = WithMagic<Hero>;
 
 const babyDragon: Pet = {
    name: 'Typeon',
    life: 50,
    attack: 10,
    defense: 20,
 };
 
 const babyLicorn: MagicalPet = {
    name: 'Typemoor',
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
 };
 
 const smallArmor: Equipment = {
    price: 30,
    attack: 2,
    defense: 5,
 };
 
 const smallSword: Equipment = {
    price: 20,
    attack: 5,
 };
 
 const smallShield: Equipment = {
    price: 15,
    defense: 10,
 };
 
 const smallMagicalWand: WithMagic<Equipment> = {
    price: 50,
    attack: 4,
    magic: 10,
 };
 
 const myWarriorHero: Hero = {
    name: 'TSolomon',
    life: 200,
    attack: 30,
    defense: 50,
    pets: [babyDragon, babyLicorn],
    equipments: [
       smallArmor,
       smallSword,
       smallShield,   
    ],
 };
 
 const myMagicienHero: Magician = {
    name: 'TSoren',
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWand],
    magic: 200,
 };

