// Ce code TypeScript n'est pas complet.
// Regardez les dernières lignes de ce script : TypeScript remonte des erreurs.
// Votre but est de modifier le code pour corriger ces erreurs.
// Vous allez devoir modifier les types déjà définis et en créer d'autres.
// ====================

type Characters = {
   name: string;
   life: number;
   attack: number;
   defense: number;
 };
 
 type Pets = Characters;
 
 type Heros = Characters &{
    pets?: Array<Pet>;
    equipments?: Array<Equipment>;
 };

 type MagicalPets = Pet & WithMagics;

 type Equipments = {
    price: number;
    attack?: number;
    defense?: number;
 }

 type WithMagics = {
    magic: number;
 }

 type Magicians = Heros & WithMagics;
 
 // ====================
 // Ne touchez PAS aux lignes ci-dessous, faites en sorte que TypeScript
 // soit content en modifiant UNIQUEMENT le code du dessus !
 
 const babyDragons: Pets = {
    name: 'Typeon',
    life: 50,
    attack: 10,
    defense: 20,
 };
 
 const babyLicorns: MagicalPets = {
    name: 'Typemoor',
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
 };
 
 const smallArmors: Equipments = {
    price: 30,
    attack: 2,
    defense: 5,
 };
 
 const smallSwords: Equipments = {
    price: 20,
    attack: 5,
 };
 
 const smallShields: Equipments = {
    price: 15,
    defense: 10,
 };
 
 const smallMagicalWands: Equipments & WithMagics = {
    price: 50,
    attack: 4,
    magic: 10,
 };
 
 const myWarriorHeros: Heros = {
    name: 'TSolomon',
    life: 200,
    attack: 30,
    defense: 50,
    pets: [babyDragons, babyLicorns],
    equipments: [
       smallArmor,
       smallSword,
       smallShield,   
    ],
 };
 
 const myMagicienHeros: Magicians = {
    name: 'TSoren',
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWands],
    magic: 200,
 };
 
