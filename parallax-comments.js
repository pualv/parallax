window.onload = function () {
    (function () {

        var data = {
            mainadjacent: 1000,
            pivot: {
                x: (document.querySelector('.container').offsetWidth) / 2,
                y: (document.querySelector('.container').offsetHeight) / 2
            },
            planes: [
                // set up image planes
                // images are set as background images in css
                // name is class name in css
                // z is 'distance' from pivot towards viewer. Higher the number, the more the image moves.
                {name: 'plane_0', z: 100},
                {name: 'plane_1', z: 150},
                {name: 'plane_2', z: 200}
            ],
            angle: {}
        }; //data


        document.onmousemove = readMouseMove;


        function readMouseMove(e) {
            var mousepos = {
                x: e.clientX,
                y: e.clientY
            };
            calcOffset(mousepos);
        } // readMouseMove

        function calcOffset(mousepos) {

            var angle, classis, offsetx, offsety;
            for (var i = 0; i < data.planes.length; i += 1) {
                angle = calculateShift(mousepos);
                classis = document.querySelector('.' + data.planes[i].name);
                offsetx = Math.atan(angle.x) * data.planes[i].z;
                offsety = Math.atan(angle.y) * data.planes[i].z;
                moveIt(offsetx, offsety, classis);
            } //for
        } // calcOffset

        function moveIt(offsetx, offsety, classis) {
            classis.style.transform = 'translateX(' + offsetx + 'px) translateY(' + offsety + 'px)';
        } // moveIt

        function calculateShift(mousepos) {
            var oppositex = data.pivot.x - mousepos.x;
            var oppositey = data.pivot.y - mousepos.y;
            data.angle.x = (Math.atan(oppositex / data.mainadjacent));
            data.angle.y = (Math.atan(oppositey / data.mainadjacent));
            data.angle.x = -data.angle.x; // make sure it's positive
            data.angle.y = -data.angle.y; // make sure it's positive
            return data.angle;
        } // calculateShift
    }());
}; // onload