import { Component, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import * as THREE from "three";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
})
export class MenuComponent implements OnInit, AfterViewInit {
  private renderer: THREE.WebGLRenderer | undefined;
  private scene: THREE.Scene | undefined;
  private camera: THREE.PerspectiveCamera | undefined;
  private cube: THREE.Mesh | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initThreeJS();
    this.animate();
  }

  private initThreeJS() {
    // Create the renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.el.nativeElement.appendChild(this.renderer.domElement);

    // Create the scene
    this.scene = new THREE.Scene();

    // Create the camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Add a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    if (this.renderer && this.scene && this.camera && this.cube) {
      // Rotate the cube
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      // Render the scene
      this.renderer.render(this.scene, this.camera);
    }
  }
}
