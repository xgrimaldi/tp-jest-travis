
const Interval = require('./interval.js');

/**
 * Test de la fonction overlaps() du fichier 'interval.js'
 */
describe('\n#########################################\n'+
         'Test de la fonction "overlaps()"\n'+
         '#########################################', function () {

    // #####################################
    // Non-Overlapping interval
    // #####################################
    // Vérification avec différents type d'intervalles positifs, négatifs, continus (se suivant l'un l'autre), données non numérique
    let inter2n = new Interval(-15,-25);
    let inter1n = new Interval(-5,-10);
    let inter1 = new Interval(5,10);
    let inter2 = new Interval(15,25);
    
    let interContinu1n = new Interval(-10,0);
    let interContinu1 = new Interval(0,10);
    let interContinu2 = new Interval(10,20);

    let interAscii1 = new Interval('a','z');
    let interAscii2 = new Interval('b','g');
    let interAscii3 = new Interval('a','b');
    let interAscii4 = new Interval('c','g');
    let interEmpty= new Interval ('','');
    let interBool= new Interval (true,false);

    test.each([
        [inter1, inter2,false,""],
        [inter2, inter1,false,""],
        [inter2n, inter1n,false,""],
        [inter1n, inter2n,false,""],
        [inter1, inter1n,false,""],
        [interContinu1n, interContinu1,false,"Test continue entre une variable positive et négative."],
        [interContinu1, interContinu2,false,"Test continue entre deux variables positives."],
        [interAscii3, interAscii4,false,"Test avec des caractères ascii"],
        [interAscii3, interEmpty,false,"Test avec des caractères ascii, et caractère vide"],
        [interAscii3, interBool,false,"Test avec des caractères ascii, et caractère booléen"],
      ])(
        'Test de Non-Overlapping: (%s overlaps %s) = expected(%s). %s',
        (int1,int2,expected ) => {
            expect(int1.overlaps(int2)).toBe(expected);
        }
      );


    // #####################################
    // Overlapping interval
    // #####################################
    let interOver1 = new Interval(0,20);
    let interOver2 = new Interval(10,20);
    let interOver1n = new Interval(-10,-1);
    let interOver2n = new Interval(-10,-4);
    let interOver3= new Interval(-5,50);
    let interOver4= new Interval(-99,99);
    let interOver5= new Interval(99,-99);

    test.each([
        [interOver1, interOver2,true,""],
        [interOver2, interOver1,true,""],
        [interOver1n, interOver2n,true,""],
        [interOver2n, interOver1n,true,""],
        [interOver1, interOver3,true,""],
        [interOver4, interOver3,true,"Test d'inclusion totale d'un intervalles par un autre"],
        [interOver3, interOver4,true,"Test d'inclusion totale d'un intervalles par un autre."],
        [interOver1, interOver1,true,"Test avec deux intervalles positives identiques."],
        [interOver1n, interOver1n,true,"Test avec deux intervalles négatives identiques."],
        [interAscii1, interAscii2,true,"Test avec des caractères ascii"],
      ])(
        'Test d\'Overlapping: %s overlaps %s and expected(%s). %s',
        (int1,int2,expected ) => {
            expect(int1.overlaps(int2)).toBe(expected);
        }
      );


});


/**
 * Test de la fonction includes() du fichier 'interval.js'
 */
describe('\n#########################################\n'+
         'Test de la fonction "includes()"\n'+
         '#########################################', function () {

    // #####################################
    // Non-Including interval
    // #####################################
    // Vérification avec différents type d'intervalles positifs, négatifs, continus (se suivant l'un l'autre), données non numérique
    let inter2n = new Interval(-15,-25);
    let inter1n = new Interval(-5,-10);
    let inter1 = new Interval(5,17);
    let inter2 = new Interval(15,25);
    
    let interContinu1n = new Interval(-10,0);
    let interContinu1 = new Interval(0,10);
    let interContinu2 = new Interval(10,20);

    let interAscii1 = new Interval('a','z');
    let interAscii2 = new Interval('b','g');
    let interAscii3 = new Interval('a','b');
    let interAscii4 = new Interval('c','g');
    let interEmpty= new Interval ('','');
    let interBool= new Interval (true,false);


    test.each([
        [inter1, inter2,false,""],
        [inter2, inter1,false,""],
        [inter2n, inter1n,false,""],
        [inter1n, inter2n,false,""],
        [inter1, inter1n,false,""],
        [interContinu1n, interContinu1,false,"Test continue entre une variable positive et négative."],
        [interContinu1, interContinu2,false,"Test continue entre deux variables positives."],
        [interAscii3, interAscii4,false,"Test avec des caractères ascii"],
        [interAscii3, interEmpty,false,"Test avec des caractères ascii, et caractère vide"],
        [interAscii3, interBool,false,"Test avec des caractères ascii, et caractère booléen"],
      ])(
        'Test Non-Including: (%s includes %s) = expected(%s). %s',
        (int1,int2,expected ) => {
            expect(int1.includes(int2)).toBe(expected);
        }
      );

      let interOver1 = new Interval(0,20);
      let interOver2 = new Interval(10,20);
      let interOver1n = new Interval(-10,-1);
      let interOver2n = new Interval(-10,-4);
      let interOver3= new Interval(-5,50);
      let interOver4= new Interval(-99,99);
      let interOver5= new Interval(99,-99);
  
    // #####################################
    // Including interval
    // #####################################
    test.each([
        [interOver1, interOver2,true,""],
        [interOver1n, interOver2n,true,""],
        [interOver4, interOver3,true,"Test d'inclusion totale d'un intervalles par un autre"],
        [interOver1, interOver1,true,"Test avec deux intervalles positives identiques."],
        [interOver1n, interOver1n,true,"Test avec deux intervalles négatives identiques."],
        [interAscii1, interAscii2,true,"Test avec des caractères ascii"],
      ])(
        'Test d\'Including: %s includes %s and expected(%s). %s',
        (int1,int2,expected ) => {
            expect(int1.includes(int2)).toBe(expected);
        }
      );


});


/**
 * Test de la fonction union() du fichier 'interval.js'
 */
describe('\n#########################################\n'+
         'Test de la fonction "union()"\n'+
         '#########################################', function () {

    // #####################################
    // Union-Overlaping interval
    // #####################################
    // Vérification avec différents type d'intervalles positifs, négatifs, continus (se suivant l'un l'autre), données non numérique
    let inter1 = new Interval(5,17);
    let inter2 = new Interval(15,25);
    let inter3 = new Interval(30,35);
    let interOver1n = new Interval(-10,-1);
    let interOver2n = new Interval(-10,-4);

    test.each([
        [inter1, inter2,new Interval(5,25),""],
        [inter2, inter1,new Interval(5,25),""],
        [interOver1n, interOver2n,new Interval(-10,-1),""],
        [interOver2n, interOver1n,new Interval(-10,-1),""],
      ])(
        'Test Union-Overlaping: (%s union %s) = expected(%s). %s',
        (int1,int2,expected ) => {
            expect(int1.union(int2)).toContainEqual(expected);
        }
      );

    // #####################################
    // Union-Non-Overlaping interval
    // #####################################
      test.each([
        [inter1, inter3,inter1,""],
        [inter3, inter2,inter3,""],
        [inter3, inter2,inter2,""],
      ])(
        'Test Union-Non-Overlaping: (%s union %s) = expected(%s). %s',
        (int1,int2,expected ) => {
            expect(int1.union(int2)).toContainEqual(expected);
        }
      );
});


/**
 * Test de la fonction union() du fichier 'interval.js'
 */
describe('\n#########################################\n'+
         'Test de la fonction "intersection()"\n'+
         '#########################################', function () {

    // #####################################
    // Intersection-Overlaping interval
    // #####################################
    // Vérification avec différents type d'intervalles positifs, négatifs, continus (se suivant l'un l'autre), données non numérique
    let inter1 = new Interval(5,17);
    let inter2 = new Interval(15,25);
    let inter3 = new Interval(30,35);
    let interOver1n = new Interval(-10,-1);
    let interOver2n = new Interval(-10,-4);

    test.each([
        [inter1, inter2,new Interval(15,17),""],
        [inter2, inter1,new Interval(15,17),""],
        [interOver1n, interOver2n,new Interval(-10,-4),""],
        [interOver2n, interOver1n,new Interval(-10,-4),""],
      ])(
        'Test Intersection-Non-Overlaping : (%s interval %s) = expected(%s). %s',
        (int1,int2,expected ) => {
            expect(int1.intersection(int2)).toEqual(expected);
        }
      );

    // #####################################
    // Intersection-Non-Overlaping interval
    // #####################################
      test.each([
        [inter1, inter3,null,""],
        [inter3, inter2,null,""],
        [inter3, inter2,null,""],
      ])(
        'Test Intersection-Non-Overlaping : (%s interval %s) = expected(%s). %s',
        (int1,int2,expected ) => {
            expect(int1.intersection(int2)).toEqual(expected);
        }
      );
});
